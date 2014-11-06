---
---
var mapData = await('globalData', 'districtTotals','districtData');

$.ajax('{{site.baseurl}}/data/epi-weeks.json', {
    success: function(data){ mapData.keep('globalData', data) },
    error: function(err) { mapData.fail(err) }
})

$.ajax('{{site.baseurl}}/data/district-centroids.json', {
    success: function(data){ mapData.keep('districtTotals', data) },
    error: function(err) { mapData.fail(err) }
})

$.ajax('{{site.baseurl}}/data/epi-weeks-district.json', {
    success: function(data){ mapData.keep('districtData', data) },
    error: function(err) { mapData.fail(err) }
})