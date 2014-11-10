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
admin2CentroidsFile = open('who-admin2.geojson', "rb").read()
admin2Centroids = json.loads(admin2CentroidsFile)

admin1CentroidsFile = open('who-admin1.geojson', "rb").read()
admin1Centroids = json.loads(admin1CentroidsFile)

def getCentroid(admin0, admin2):
	if admin0 == 'Liberia' or admin2 == 'Conakry' or admin2 == 'Dakar':
		if admin2 == 'Monrovia':
			return [-10.7215195765,6.3137163044]
		elif admin2 == 'Dakar':
			return [17.4467,14.6928]
		else:
			for district in admin1Centroids['features']:
				if district['properties']['ADM0_NAME'].lower() == admin0.lower() and district['properties']['ADM1_NAME'].lower() == admin2.lower():
					lon = district['properties']['CENTER_LON']
					lat = district['properties']['CENTER_LAT']
					return [lon,lat]
	else: 
		for district in admin2Centroids['features']:
			if district['properties']['ADM0_NAME'].lower() == admin0.lower() and district['properties']['ADM2_NAME'].lower() == admin2.lower():
				lon = district['properties']['CENTER_LON']
				lat = district['properties']['CENTER_LAT']
				return [lon,lat]

# the itertools functions need data sorted by key, so first sort by country
data_country = sorted(data, key=lambda x: x['district'])
data_week = sorted(data_country, key=lambda x: x['epiweek'])

# make country totals
districts = []

# make epi-week totals
weeks = []

for week, values in groupby(data_week, lambda x: x['epiweek']):
	epiweek = {
		"epiweek": "",
		"total": 0,
		"districts": [],
		"confirmed": 0,
		"probable": 0,
		"suspected": 0,
		"deaths": 0
	}
	epiweek["epiweek"] = week

	weekTotal = 0
	weekConfirmed = 0
	weekProbable = 0
	weekSuspected = 0
	weekDeaths = 0
	
	for district, dist in groupby(sorted(values, key=lambda x: x['district']), lambda x: x['district']):
		# for country totals
		district_totals = {
			"country": "",
			"district": "",
			"confirmed": 0,
			"probable": 0,
			"suspected": 0,
			"hcw": 0,
			"total_cases": 0,
			"centroid": [],
			"deaths": 0
		}
		district_totals["district"] = district
		
		total = 0
		hcw = 0
		deaths = 0

		for case, c in groupby(sorted(dist, key=lambda x: x['EpiCaseDef']), lambda x: x['EpiCaseDef']):
			count = 0
			for i in c:
				district_totals["country"] = i['country']
				district_totals["centroid"] = getCentroid(i['country'], district)
				weekTotal += 1
				total += 1

				# check if HCW, add to total count
				if i['HCW'] == "TRUE":
					hcw += 1
				# check if status = Dead
				if i['StatusAsOfCurrentDate'].lower() == "dead":
					deaths += 1
					weekDeaths += 1
					
				count += 1
			if case == "Confirmed":
				district_totals["confirmed"] = count
			elif case == "Probable":
				district_totals["probable"] = count
			else: 
				district_totals["suspected"] = count
		weekConfirmed += district_totals["confirmed"]
		weekProbable += district_totals["probable"]
		weekSuspected += district_totals["suspected"]
		district_totals["total_cases"] = total
		district_totals["hcw"] = hcw
		district_totals["deaths"] = deaths

		epiweek["districts"].append(district_totals)
	epiweek["total"] = weekTotal
	epiweek["confirmed"] = weekConfirmed
	epiweek["probable"] = weekProbable
	epiweek["suspected"] = weekSuspected
	epiweek["deaths"] = weekDeaths
	weeks.append(epiweek)


writeout = json.dumps(weeks, sort_keys=True, indent=4)
out = open('../data/epi-weeks-district.json', 'wb')
out.writelines(writeout)
out.close()


