# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Product.destroy_all

#Create 20 products
20.times do
  Product.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price(range: 0..100.0, as_string: true),
    stock_quantity: Faker::Number.between(from: 0, to: 100),
    description: Faker::Lorem.paragraph(sentence_count: 2),
  )
end
