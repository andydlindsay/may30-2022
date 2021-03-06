# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting seeds"

puts "creating movies"

10.times do  
  Movie.create(
    name: Faker::JapaneseMedia::StudioGhibli.movie
  )
end

puts "retrieving movies"

movies = Movie.all

puts "creating the characters"

30.times do
  Character.create(
    name: Faker::JapaneseMedia::StudioGhibli.character,
    quote: Faker::JapaneseMedia::StudioGhibli.quote,
    movie: movies.sample
  )
end

puts "all done!"
