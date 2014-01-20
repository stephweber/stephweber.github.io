#!/usr/bin/env ruby

Dir.glob("*.html.haml") do |f|
  `haml #{f} > #{f.gsub(".haml", "")}`
end

Dir.glob("stylesheets/*.less") do |f|
  `lessc -x #{f} > #{f.gsub(".less", ".css")}`
end

