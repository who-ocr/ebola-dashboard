import csv, sys
from datetime import date, timedelta
from itertools import groupby
import simplejson as json

inFile = "external_portal.csv"

today = date.today()
lastweek = today - timedelta(days=7)

# "","country","district","date","epiweek","EpiCaseDef","HCW"

# Open csv
data = csv.DictReader(open(inFile, 'rb'), delimiter= ',', quotechar = '"')

# Open geojson
countryCentroidsFile = open('who-admin0-centroids.geojson', "rb").read()
countryCentroids = json.loads(countryCentroidsFile)

def getCentroid(admin0):
	for country in countryCentroids['features']:
		if country['properties']['ADM0_NAME'].lower() == admin0.lower():
			lon = country['properties']['CENTER_LON']
			lat = country['properties']['CENTER_LAT']
			return [lon,lat]

# the itertools functions need data sorted by key, so first sort by country
data_country = sorted(data, key=lambda x: x['country'])
data_week = sorted(data_country, key=lambda x: x['epiweek'])

# make country totals
countries = []

# make epi-week totals
weeks = []

for week, values in groupby(data_week, lambda x: x['epiweek']):
	epiweek = {
		"epiweek": "",
		"total": 0,
		"countries": [],
		"confirmed": 0,
		"probable": 0,
		"suspected": 0
	}
	epiweek["epiweek"] = week

	weekTotal = 0
	weekConfirmed = 0
	weekProbable = 0
	weekSuspected = 0
	
	for country, cty in groupby(sorted(values, key=lambda x: x['country']), lambda x: x['country']):
		# for country totals
		country_totals = {
			"country": "",
			"confirmed": 0,
			"probable": 0,
			"suspected": 0,
			"hcw": 0,
			"total_cases": 0,
			"centroid": getCentroid(country)
		}
		country_totals["country"] = country
		
		total = 0
		hcw = 0

		for case, c in groupby(sorted(cty, key=lambda x: x['EpiCaseDef']), lambda x: x['EpiCaseDef']):
			count = 0
			for i in c: 
				weekTotal += 1
				total += 1
				if i['HCW'] == "TRUE":
					hcw += 1
				caseDate = i['date'].split('-')
				count += 1
			if case == "Confirmed":
				country_totals["confirmed"] = count
			elif case == "Probable":
				country_totals["probable"] = count
			else: 
				country_totals["suspected"] = count
		weekConfirmed += country_totals["confirmed"]
		weekProbable += country_totals["probable"]
		weekSuspected += country_totals["suspected"]
		country_totals["total_cases"] = total
		country_totals["hcw"] = hcw

		epiweek["countries"].append(country_totals)
	epiweek["total"] = weekTotal
	epiweek["confirmed"] = weekConfirmed
	epiweek["probable"] = weekProbable
	epiweek["suspected"] = weekSuspected
	weeks.append(epiweek)


writeout = json.dumps(weeks, sort_keys=True, indent=4)
out = open('../data/epi-weeks.json', 'wb')
out.writelines(writeout)
out.close()


