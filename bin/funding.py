import csv, sys
from datetime import date, timedelta
from itertools import groupby
import simplejson as json

inFile = "funding-for-ocrmart.csv"

# "","country","district","date","epiweek","EpiCaseDef","HCW"

# Open csv
data = csv.DictReader(open(inFile, 'rU'), delimiter= ',', quotechar = '"')

funding = {
	"contributions": [],
	"pledges": []	
}

for line in data: 
	if line['type'] == 'contribution':
		funding["contributions"].append(line)
	else:
		funding["pledges"].append(line)

writeout = json.dumps(funding, sort_keys=True, indent=4, encoding='latin')
out = open('../data/funding.json', 'wb')
out.writelines(writeout)
out.close()
