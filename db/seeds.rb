# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Artist.destroy_all
    Album.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    #Create Demo User
    User.create!(
      username: 'Guest',
      email: 'guest@guest.com',
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating artists..."

    Artist.create!(
      name: "Lil Uzi Vert"
      # albums: [1]
    )

    Artist.create!(
      name: "Logic"
      # albums: [2]
    )

    puts "Creating albums..."

    Album.create!(
      title: "Eternal Atake",
      artist_id: 1,
      year: 2020,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Eternal_Atake_Lil_Uzi_Vert.jpg'
    )

    Album.create!(
      title: "Confessions of a Dangerous Mind",
      artist_id: 2,
      year: 2019,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/48fqqfpepeixxxfyn7i4h1xqdyrg'
    )
    
    puts "Creating songs..."

    Song.create!(
      title: "Baby Pluto",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Baby+Pluto+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "Lo Mein",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Lo+Mein+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "Silly Watch",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Silly+Watch+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "POP",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+POP+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "You Better Move",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+You+Better+Move+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "Homecoming",
      album_id: 1,
      song_url: 'https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Homecoming+%5BOfficial+Audio%5D.mp3'
    )

    Song.create!(
      title: "I'm Sorry",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+I'm+Sorry+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Celebration Station",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Celebration+Station+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Bigger Than Life",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Bigger+Than+Life+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Chrome Heart Tags",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Chrome+Heart+Tags+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Bust Me",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Bust+Me+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Prices",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Prices+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Urgency feat. SYD",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Urgency+feat.+SYD+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Venetia",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Venetia+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "Secure The Bag",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+Secure+The+Bag+%5BOfficial+Audio%5D.mp3"
    )

    Song.create!(
      title: "P2",
      album_id: 1,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Lil+Uzi+Vert+-+P2+%5BOfficial+Audio%5D.mp3"
    )

    puts "Done!"
  end

  # comment2

# require 'open-uri'
# post = Post.create(title: "hello world")
# post.photo.attach(io: URI.open("https://www.computerhope.com/jargon/j/jpg.png%22"), filename: 'jpeg_image.png')