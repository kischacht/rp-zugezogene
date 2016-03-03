require 'csv'
require 'json'
require 'open-uri'
require 'uri'

cities = []

CSV.foreach('../opendata/geburtsort_coded.csv') do |row|
  city = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [row[7].to_f, row[6].to_f]
    },
    properties: {
      country: row[0],
      city: row[2].rstrip,
      count: row[4].to_i,
      distance: row[8].to_f
    }
  }

  # adding city object to cities array
  if $. != 1 && row[2].rstrip != 'Düsseldorf'
    cities.push(city) unless $. == 1
  end
end

data = {type: 'FeatureCollection', features: cities}
File.open("../opendata/cities.geojson", 'w') { |file| file.print data.to_json }
