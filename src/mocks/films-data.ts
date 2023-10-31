export type FilmData = {
  id: number;
  name: string;
  releaseDate: number;
  genres: string;
  summary: string;
  shortSummary: string;
  duration: number;
  imageSource: string;
  backgroundImageSource: string;
  trailerSource: string;
  rating: number;
  ratingsCount: number;
  director: string;
  starring: string;
}

export const filmsData: ReadonlyArray<FilmData> = [
  {
    id: 0,
    name: 'The Greatest Showman',
    releaseDate: 2017,
    genres: 'Biography, Drama, Musical, Romance',
    summary: 'Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum\'s wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?',
    shortSummary: 'Celebrates the birth of show business, and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.',
    duration: 105,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 7.8,
    ratingsCount: 763,
    director: 'Michael Gracey',
    starring: 'Hugh Jackman, Michelle Williams'
  },
  {
    id: 1,
    name: 'Star Wars: The Last Jedi',
    releaseDate: 2017,
    genres: 'Action, Adventure, Fantasy, Sci-Fi',
    summary: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
    shortSummary: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
    duration: 152,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 7.4,
    ratingsCount: 487,
    director: 'Rian Johnson',
    starring: 'Daisy Ridley, John Boyega, Mark Hamill'
  },
  {
    id: 2,
    name: 'Pitch Perfect 3',
    releaseDate: 2017,
    genres: 'Comedy, Music',
    summary: 'After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren\'t job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.',
    shortSummary: 'Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.',
    duration: 93,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMTU5NDI1MjkwMF5BMl5BanBnXkFtZTgwNjIxNTY2MzI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 6,
    ratingsCount: 124,
    director: 'Trish Sie',
    starring: 'Anna Kendrick, Rebel Wilson'
  },
  {
    id: 3,
    name: 'I, Tonya',
    releaseDate: 2017,
    genres: 'Biography, Comedy, Drama, Sport',
    summary: 'From the proverbial wrong side of the tracks in Portland, Oregon, former competitive figure skater Tonya Harding was never fully accepted in the figure skating community for not inherently being the image of grace, breeding and privilege that the community wanted to portray, despite she being naturally gifted in the sport athletically. Despite ultimately garnering some success in figure skating being national champion, a world championship medalist, an Olympian, and being the first American woman to complete a Triple Axel in competition, she is arguably best known for her association to "the incident": the leg bashing on January 6, 1994 of her competitor, Nancy Kerrigan, who, unlike Tonya, was everything that the figure skating community wanted in their representatives. Her association to that incident led to Tonya being banned from competitive figure skating for life. Tonya\'s story from the beginning of her figure skating life at age four to the aftermath of the incident is presented...',
    shortSummary: 'Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.',
    duration: 120,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 7.6,
    ratingsCount: 748,
    director: 'Craig Gillespie',
    starring: 'Allison Janney, Margot Robbie, Sebastian Stan'
  },
  {
    id: 4,
    name: 'Call Me by Your Name',
    releaseDate: 2017,
    genres: 'Drama, Romance',
    summary: 'CALL ME BY YOUR NAME, the new film by Luca Guadagnino, is a sensual and transcendent tale of first love, based on the acclaimed novel by Andrew Aciman. It\'s the summer of 1983 in the north of Italy, and Elio Perlman (Timothewe Chalamet), a precocious 17-year-old young man, spends his days in his family\'s 17th century villa transcribing and playing classical music, reading, and flirting with his friend Marzia (Esther Garrel). Elio enjoys a close relationship with his father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture, and his mother Annella (Amira Casar), a translator, who favor him with the fruits of high culture in a setting that overflows with natural delights. While Elio\'s sophistication and intellectual gifts suggest he is already a fully-fledged adult, there is much that yet remains innocent and unformed about him, particularly about matters of the heart. One day, Oliver (Armie Hammer), a 24-year-old American college graduate student working on his...',
    shortSummary: 'In 1980s Italy, a romance blossoms between a seventeen year-old student and the older man hired as his father\'s research assistant.',
    duration: 132,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8,
    ratingsCount: 2128,
    director: 'Luca Guadagnino',
    starring: 'Armie Hammer, Michael Stuhlbarg, Timoth√©e Chalamet'
  },
  {
    id: 5,
    name: 'Kingsman: The Golden Circle',
    releaseDate: 2017,
    genres: 'Action, Adventure, Comedy',
    summary: 'After the Kingsman headquarters are blown up by a psychotic criminal named Poppy Adams, the surviving agents find their way to an allied secret organisation based in Kentucky, named Statesman. The two agencies must now work together in order to save the world and take down the so called \'Golden Circle\'.',
    shortSummary: 'When their headquarters are destroyed and the world is held hostage, the Kingsman\'s journey leads them to the discovery of an allied spy organization in the United States. These two elite secret organizations must band together to defeat a common enemy.',
    duration: 141,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMjQ3OTgzMzY4NF5BMl5BanBnXkFtZTgwOTc4OTQyMzI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 6.8,
    ratingsCount: 524,
    director: 'Matthew Vaughn',
    starring: 'Colin Firth, Taron Egerton'
  },
  {
    id: 6,
    name: 'Spider-Man: Homecoming',
    releaseDate: 2017,
    genres: 'Action, Adventure, Sci-Fi',
    summary: 'Peter Parker is exploring the concept of becoming an Avenger. Tony Stark tries to help Peter, but he does not have total faith in Spider-Man to become a hero. And so Peter Parker, aka Spider-Man sets off to prove he is worthy to become an Avenger!',
    shortSummary: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
    duration: 133,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 7.5,
    ratingsCount: 417,
    director: 'Jon Watts',
    starring: 'Michael Keaton, Tom Holland'
  },
  {
    id: 7,
    name: 'La La Land',
    releaseDate: 2016,
    genres: 'Action, Comedy, Drama, Music, Musical',
    summary: 'Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars. But as success mounts, they are faced with decisions that fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    shortSummary: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    duration: 128,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8.8,
    ratingsCount: 1573,
    director: 'Damien Chazelle',
    starring: 'Emma Stone, Rosemarie DeWitt, Ryan Gosling'
  },
  {
    id: 8,
    name: 'Rogue One: A Star Wars Story',
    releaseDate: 2016,
    genres: 'Action, Adventure, Sci-Fi',
    summary: 'All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success.',
    shortSummary: 'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.',
    duration: 133,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 7.8,
    ratingsCount: 648,
    director: 'Gareth Edwards',
    starring: 'Diego Luna, Felicity Jones'
  },
  {
    id: 9,
    name: 'Miss Peregrine\'s Home for Peculiar Children',
    releaseDate: 2016,
    genres: 'Action, Adventure, Drama, Family, Fantasy',
    summary: 'When Jacob discovers clues to a mystery that spans different worlds and times, he finds a magical place known as Miss Peregrine\'s Home for Peculiar Children. But the mystery and danger deepen as he gets to know the residents and learns about their special powers... and their powerful enemies. Ultimately, Jacob discovers that only his own special "peculiarity" can save his new friends.',
    shortSummary: 'When Jacob discovers clues to a mystery that stretches across time, he finds Miss Peregrine\'s Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers.',
    duration: 127,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 6.7,
    ratingsCount: 176,
    director: 'Tim Burton',
    starring: 'Asa Butterfield, Eva Green, Samuel L. Jackson'
  }
];
