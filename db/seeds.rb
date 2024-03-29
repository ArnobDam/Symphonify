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
    Song.destroy_all
    Playlist.destroy_all
    PlaylistSong.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('artists')
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('songs')
    ApplicationRecord.connection.reset_pk_sequence!('playlists')
    ApplicationRecord.connection.reset_pk_sequence!('playlist_songs')
  
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

    Artist.create!(
      name: "Metro Boomin"
      # albums: [2]
    )

    Artist.create!(
      name: "Kelly Clarkson"
      # albums: [2]
    )

    Artist.create!(
      name: "Lady Gaga"
      # albums: [2]
    )

    Artist.create!(
      name: "Travis Scott"
    )

    Artist.create!(
      name: "Ariana Grande"
    )

    Artist.create!(
      name: "Thouxanbanfauni"
    )

    Artist.create!(
      name: "Zedd"
    )

    Artist.create!(
      name: "Ed Sheeran"
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

    Album.create!(
      title: "NOT ALL HEROES WEAR CAPES",
      artist_id: 3,
      year: 2018,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Metro_Boomin_%E2%80%93_Not_All_Heroes_Wear_Capes.png'
    )

    Album.create!(
      title: "Breakaway",
      artist_id: 4,
      year: 2004,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Breakaway_Album.png'
    )

    Album.create!(
      title: "The Fame",
      artist_id: 5,
      year: 2008,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Lady_Gaga_%E2%80%93_The_Fame_album_cover.png'
    )

    Album.create!(
      title: "ASTROWORLD",
      artist_id: 6,
      year: 2018,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/travis-scott-astroworld-cover-art-full.jpg'
    )

    Album.create!(
      title: "thank u, next",
      artist_id: 7,
      year: 2019,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Thank_U%2C_Next_album_cover.png'
    )

    Album.create!(
      title: "CLAIRVOYANCE",
      artist_id: 8,
      year: 2020,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/CLAIRVOYANCE+Thouxanbanfauni.jfif'
    )

    Album.create!(
      title: "Clarity",
      artist_id: 9,
      year: 2012,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Zedd_-_Clarity_(album).png'
    )

    Album.create!(
      title: "=",
      artist_id: 10,
      year: 2021,
      album_photo_url: 'https://symphonify-dev.s3.amazonaws.com/Ed_Sheeran_-_Equals.png'
    )
    
    puts "Creating songs..."

    # Eternal Atake

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
      title: "Urgency (feat. Syd)",
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

    #Confessions of a Dangerous Mind

    Song.create!(
      title: "Confessions of a Dangerious Mind",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Confessions+of+a+Dangerous+Mind.mp3"
    )

    Song.create!(
      title: "Homicide (feat. Eminem)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Homicide+ft.+Eminem+(Official+Video).mp3"
    )

    Song.create!(
      title: "Wannabe",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Wannabe.mp3"
    )

    Song.create!(
      title: "clickbait",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+clickbait+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Mama/Show Love (feat. YBN Cordae)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Mama++Show+Love+(feat.+YBN+Cordae)+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Out Of Sight",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Out+Of+Sight+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Pardon My Ego",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Pardon+My+Ego+(Official+Audio).mp3"
    )

    Song.create!(
      title: "COMMANDO (feat. G-Eazy)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+COMMANDO+(feat.+G-Eazy)+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Icy (feat. Gucci Mane)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Icy+ft.+Gucci+Mane+(Official+Video).mp3"
    )

    Song.create!(
      title: "Still Ballin (feat. Wiz Khalifa)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Still+Ballin'+(feat.+Wiz+Khalifa)+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Cocaine",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Cocaine+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Limitless",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Limitless+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Keanu Reeves",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Keanu+Reeves+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Don't Be Afraid To Be Different (feat. Will Smith)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Don't+Be+Afraid+To+Be+Different+(feat.+Will+Smith)+(Official+Audio).mp3"
    )

    Song.create!(
      title: "BOBBY (feat. My Dad)",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+BOBBY+(feat.+My+Dad)+(Official+Audio).mp3"
    )

    Song.create!(
      title: "Lost In Translation",
      album_id: 2,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Logic+-+Lost+In+Translation+(Official+Audio).mp3"
    )

    #NOT ALL HEROES WEAR CAPES

    Song.create!(
      title: "10AM/Save The World (feat. Gucci Mane)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/10AMSave+The+World.mp3"
    )

    Song.create!(
      title: "Overdue (with Travis Scott)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Overdue.mp3"
    )
    
    Song.create!(
      title: "Don't Come Out The House (with 21 Savage)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Don't+Come+Out+The+House.mp3"
    )
    
    Song.create!(
      title: "Dreamcatcher (feat. Swae Lee & Travis Scott)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Dreamcatcher.mp3"
    )
    
    Song.create!(
      title: "Space Cadet (feat. Gunna)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Space+Cadet.mp3"
    )
    
    Song.create!(
      title: "10 Freaky Girls (with 21 Savage)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/10+Freaky+Girls.mp3"
    )
    
    Song.create!(
      title: "Up To Something (feat. Travis Scott & Young Thug)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Up+To+Something.mp3"
    )
    
    Song.create!(
      title: "Only 1 (Interlude) (with Travis Scott)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Only+1+(Interlude).mp3"
    )
    
    Song.create!(
      title: "Lesbian (feat. Gunna & Young Thug)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Lesbian.mp3"
    )
    
    Song.create!(
      title: "Borrowed Love (feat. Swae Lee & WizKid)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Borrowed+Love.mp3"
    )
    
    Song.create!(
      title: "Only You (feat. WizKid, Offset & J Balvin)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/Only+You.mp3"
    )
    
    Song.create!(
      title: "No More (feat. Travis Scott, Kodak Black & 21 Savage)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/No+More.mp3"
    )
    
    Song.create!(
      title: "No Complaints (feat. Offset & Drake) (Bonus)",
      album_id: 3,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Not+all+heroes+metro/No+Complaints+(Bonus).mp3"
    )

    #Breakaway

    Song.create!(
      title: "Breakaway",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Kelly+Clarkson+-+Breakaway+(VIDEO).mp3"
    )
    
    Song.create!(
      title: "Since U Been Gone",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Since+U+Been+Gone+v2.mp3"
    )
    
    Song.create!(
      title: "Behind These Hazel Eyes",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Kelly+Clarkson+-+Behind+These+Hazel+Eyes+(Official+Music+Video).mp3"
    )
    
    Song.create!(
      title: "Because of You",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Kelly+Clarkson+-+Because+Of+You+(VIDEO).mp3"
    )
    
    Song.create!(
      title: "Gone",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Gone.mp3"
    )
    
    Song.create!(
      title: "Addicted",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Addicted.mp3"
    )
    
    Song.create!(
      title: "Where Is Your Heart",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Where+Is+Your+Heart.mp3"
    )
    
    Song.create!(
      title: "Walk Away",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Walk+Away+-+Kelly+Clarkson.mp3"
    )
    
    Song.create!(
      title: "You Found Me",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/You+Found+Me.mp3"
    )
    
    Song.create!(
      title: "I Hate Myself For Losing You",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/I+Hate+Myself+For+Losing+You.mp3"
    )
    
    Song.create!(
      title: "Hear Me",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Hear+Me.mp3"
    )
    
    Song.create!(
      title: "Beautiful Disaster - Live",
      album_id: 4,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Breakaway+Album+Kelly+Clarkson/Beautiful+Disaster+(Live).mp3"
    )

    #The Fame

    Song.create!(
      title: "Just Dance",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Just+Dance.mp3"
    )
    
    Song.create!(
      title: "LoveGame",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Lovegame.mp3"
    )
    
    Song.create!(
      title: "Paparazzi",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Paparazzi.mp3"
    )
    
    Song.create!(
      title: "Poker Face",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Poker+Face.mp3"
    )
    
    Song.create!(
      title: "Eh, Eh (Nothing Else I Can Say)",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-++Eh%2C+Eh+(Nothing+Else+I+Can+Say).mp3"
    )
    
    Song.create!(
      title: "Beautiful, Dirty, Rich",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Beautiful%2C+Dirty%2C+Rich.mp3"
    )
    
    Song.create!(
      title: "The Fame",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+The+Fame.mp3"
    )
    
    Song.create!(
      title: "Money Honey",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Money+Honey.mp3"
    )
    
    Song.create!(
      title: "Starstruck",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Starstruck.mp3"
    )
    
    Song.create!(
      title: "Boys Boys Boys",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Boys+Boys+Boys.mp3"
    )
    
    Song.create!(
      title: "Paper Gangsta",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Paper+Gangsta.mp3"
    )
    
    Song.create!(
      title: "Brown Eyes",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Brown+Eyes.mp3"
    )
    
    Song.create!(
      title: "I Like It Rough",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+I+Like+It+Rough.mp3"
    )
    
    Song.create!(
      title: "Summerboy",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-+Summerboy.mp3"
    )
    
    Song.create!(
      title: "Disco Heaven",
      album_id: 5,
      song_url: "https://symphonify-dev.s3.amazonaws.com/The+Fame+LG+Album/Lady+Gaga+-+The+Fame+-++Disco+Heaven.mp3"
    )

    #ASTROWORLD

    Song.create!(
      title: "STARGAZING",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+STARGAZING+(Audio).mp3"
    )
    
    Song.create!(
      title: "CAROUSEL",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+CAROUSEL+(Audio).mp3"
    )
    
    Song.create!(
      title: "SICKO MODE",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+SICKO+MODE+ft.+Drake.mp3"
    )
    
    Song.create!(
      title: "R.I.P. SCREW",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+R.I.P.+SCREW+(Audio).mp3"
    )
    
    Song.create!(
      title: "STOP TRYING TO BE GOD",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+STOP+TRYING+TO+BE+GOD.mp3"
    )
    
    Song.create!(
      title: "NO BYSTANDERS",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+NO+BYSTANDERS+(Audio).mp3"
    )
    
    Song.create!(
      title: "SKELETONS",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+SKELETONS+(Audio).mp3"
    )
    
    Song.create!(
      title: "WAKE UP",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+WAKE+UP+(Audio).mp3"
    )
    
    Song.create!(
      title: "5% TINT",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+5+TINT+(Audio).mp3"
    )
    
    Song.create!(
      title: "NC-17",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+NC-17+(Audio).mp3"
    )
    
    Song.create!(
      title: "ASTROTHUNDER",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+ASTROTHUNDER+(Audio).mp3"
    )
    
    Song.create!(
      title: "YOSEMITE",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+YOSEMITE+(Audio).mp3"
    )
    
    Song.create!(
      title: "CAN'T SAY",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+CAN'T+SAY.mp3"
    )
    
    Song.create!(
      title: "WHO? WHAT!",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+WHO_+WHAT!+(Audio).mp3"
    )
    
    Song.create!(
      title: "BUTTERFLY EFFECT",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+Butterfly+Effect+(audio).mp3"
    )
    
    Song.create!(
      title: "HOUSTONFORNICATION",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+HOUSTONFORNICATION+(Audio).mp3"
    )
    
    Song.create!(
      title: "COFFEE BEAN",
      album_id: 6,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Astroworld+Album/Travis+Scott+-+COFFEE+BEAN+(Audio).mp3"
    )

    #thank u, next

    Song.create!(
      title: "imagine",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+imagine+(Audio).mp3"
    )
    
    Song.create!(
      title: "needy",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+needy+(Audio).mp3"
    )
    
    Song.create!(
      title: "NASA",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+NASA+(Audio).mp3"
    )
    
    Song.create!(
      title: "bloodline",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+bloodline+(Audio).mp3"
    )
    
    Song.create!(
      title: "fake smile",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+fake+smile+(Audio).mp3"
    )
    
    Song.create!(
      title: "bad idea",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+bad+idea+(Audio).mp3"
    )
    
    Song.create!(
      title: "make up",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+make+up+(Audio).mp3"
    )
    
    Song.create!(
      title: "ghostin",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+ghostin+(Audio).mp3"
    )
    
    Song.create!(
      title: "in my head",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+in+my+head+(Audio).mp3"
    )
    
    Song.create!(
      title: "7 rings",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+7+rings+(Audio).mp3"
    )
    
    Song.create!(
      title: "thank u, next",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+thank+u%2C+next+(audio).mp3"
    )
    
    Song.create!(
      title: "break up with your girlfriend, i'm bored",
      album_id: 7,
      song_url: "https://symphonify-dev.s3.amazonaws.com/thank+u+next+album/Ariana+Grande+-+break+up+with+your+girlfriend%2C+im+bored+(Audio).mp3"
    )

    #CLAIRVOYANCE

    Song.create!(
      title: "AMERICAN MUSCLE",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_AMERICAN+MUSCLE_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "MYRTLE BEACH",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_MYRTLE+BEACH_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "TSUKUYOMI",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_TSUKUYOMI_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "DEJA VU",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_Deja+Vu_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "TOKYO DRIFT",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_TOKYO+DRIFT_+Ft.+Lil+Yachty+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "BLACK OUT BOYZ 4LIFE",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_BLACK+OUT+BOYZ+4LIFE_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "ENGAGE",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_ENGAGE_+Ft.+12TilDee+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "SOUPED UP!",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_SOUPED+UP!_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "STYRO STAINS",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_STRYO+STRAINS_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "BIG DAWG",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_BIG+DAWG_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "ULTRA VIOLET",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_ROTTWEILER_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "DOMINO",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_DOMINO_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "FULLY FLARED",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_FULLY+FLARED_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "FIRESTONE",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_FIRESTONE_+Ft.+Black+Kray+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "EUPHORIA IN GLORIA",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_EUPHORIA+IN+GLORIA_+(CLAIRVOYANCE).mp3"
    )
    
    Song.create!(
      title: "PARADOX",
      album_id: 8,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clairvoyance+album/Thouxanbanfauni+-+_PARADOX_+(CLAIRVOYANCE).mp3"
    )

    #Clarity

    Song.create!(
      title: "Hourglass",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Hourglass.mp3"
    )
    
    Song.create!(
      title: "Shave It Up",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Shave+It+Up.mp3"
    )
    
    Song.create!(
      title: "Spectrum",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Spectrum.mp3"
    )
    
    Song.create!(
      title: "Lost At Sea",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Lost+At+Sea.mp3"
    )
    
    Song.create!(
      title: "Clarity",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Clarity.mp3"
    )
    
    Song.create!(
      title: "Codec",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Codec.mp3"
    )
    
    Song.create!(
      title: "Stache",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Stache.mp3"
    )
    
    Song.create!(
      title: "Fall Into The Sky",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Fall+Into+The+Sky.mp3"
    )
    
    Song.create!(
      title: "Follow You Down",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Follow+You+Down.mp3"
    )
    
    Song.create!(
      title: "Epos",
      album_id: 9,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Clarity+album/Epos.mp3"
    )

    #=

    Song.create!(
      title: "Tides",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Tides.mp3"
    )
    
    Song.create!(
      title: "Shivers",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Shivers.mp3"
    )
    
    Song.create!(
      title: "First Times",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/First+Times.mp3"
    )
    
    Song.create!(
      title: "Bad Habits",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Bad+Habits.mp3"
    )
    
    Song.create!(
      title: "Overpass Graffiti",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Overpass+Graffiti.mp3"
    )
    
    Song.create!(
      title: "The Joker And The Queen",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/The+Joker+And+The+Queen.mp3"
    )
    
    Song.create!(
      title: "Leave Your Life",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Leave+Your+Life.mp3"
    )
    
    Song.create!(
      title: "Collide",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Collide.mp3"
    )
    
    Song.create!(
      title: "2step",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/2step.mp3"
    )
    
    Song.create!(
      title: "Stop The Rain",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Stop+The+Rain.mp3"
    )
    
    Song.create!(
      title: "Love In Slow Motion",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Love+In+Slow+Motion.mp3"
    )
    
    Song.create!(
      title: "Visiting Hours",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Visiting+Hours.mp3"
    )
    
    Song.create!(
      title: "Sandman",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Sandman.mp3"
    )
    
    Song.create!(
      title: "Be Right Now",
      album_id: 10,
      song_url: "https://symphonify-dev.s3.amazonaws.com/Ed+Sheeran+album/Be+Right+Now.mp3"
    )

    puts "Creating playlists..."

    Playlist.create!( #id 1
      title: "Rap music",
      creator_id: 2 #Guest / demo user
    )

    Playlist.create!(
      title: "Jeanice's playlist",
      creator_id: 1
    )

    Playlist.create!( #id 3
      title: "My Workout Playlist",
      creator_id: 2
    )

    Playlist.create!( #id 4
      title: "Pop Favorites",
      creator_id: 2
    )

    puts "Creating playlist songs..."

    #Rap Music

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 14
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 15
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 29
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 34
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 45
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 87
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 88
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 112
    )

    PlaylistSong.create!(
      playlist_id: 1,
      song_id: 85
    )

    #My Workout Playlist

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 58
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 75
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 84
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 99
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 112
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 120
    )

    PlaylistSong.create!(
      playlist_id: 3,
      song_id: 122
    )

    #Pop Favorites

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 47
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 60
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 61
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 99
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 129
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 131
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 136
    )

    PlaylistSong.create!(
      playlist_id: 4,
      song_id: 48
    )
    
    puts "Done!"
  end

  # comment2

# require 'open-uri'
# post = Post.create(title: "hello world")
# post.photo.attach(io: URI.open("https://www.computerhope.com/jargon/j/jpg.png%22"), filename: 'jpeg_image.png')