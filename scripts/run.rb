require 'csv'
require 'json'
require 'open-uri'
require 'uri'

cities = []

CSV.foreach('../opendata/geburtsort_coded.csv') do |row|
  # puts "requesting lat and lon for #{row[0]}"
  # url = URI.encode("https://nominatim.openstreetmap.org/search?format=json&city=#{row[0]}&limit=1")
  # res = open(url).read
  # json_res = JSON.parse(res)

  lat = 51
  lon = 7
  # if json_res.first
  #   lat = json_res.first['lat']
  #   lon = json_res.first['lon']
  # end

  city = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [row[7], row[6]]
    },
    properties: {
      country: row[0],
      city: row[2],
      count: row[4],
      distance: row[8]
    }
  }

  # adding city object to cities array
  cities.push(city)
end

data = {type: 'FeatureCollection', features: cities}
File.open("../opendata/cities.geojson", 'w') { |file| file.print data.to_json }
