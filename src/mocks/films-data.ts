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
  director: string;
  starring: string;
}

export const filmsData: FilmData[] = [
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi1588967449/1434659607842-pgv4ql-1510582065047.mp4?Expires=1697385736&Signature=Lt533rASt77NfBkuENhFvn3n09AnSbT2-Arj~6JqjnXQDkaHVEYspKx-DWssKkeB2oJZ4vF10GHFjgZoDUP1to8ssl1Ybk-vGbN7GdlF9Td17VB52ZjLPUnWRJd9afbwEhaaOVY~cw016U9oT-V6bs2rpe9Ltp3Xn~gmlct~MuPWyco4a4TLAGO-Qd0ShRzyG8B4jBbPfUL2DVHhoJKag1lYG~fxUza9jkaWOB8t2vdnrjJqGaqzIw5vpwyRpw2Jv3jByHogiU5ftuNQVQrjrFfSJXc6kARQ-DC6P2dij6a~MoAANu3BHIc04LDe~d-RAKOaKSCQrjLxM-yu7B~N1A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 7.8,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi983676953/1434659607842-pgv4ql-1511496527559.mp4?Expires=1697386077&Signature=E5exiRd~oLR2Z20oZeTYtJevszRIwqqnYgkJKp55VriAQAZqXv0vD~3Al4xCgw1m7IwqiO~OktEVfVNH~J2IY79h3MPveWZOHWN93AvMGltmg1uRJzMfdTThzvZcc12KgscxglBi0mjazkkDbEvXrNcSavUBsmkqBbatP6A3gCFQ1c1XANozQGtpxZJj0AQTiwW8Wno90RFv8XkMDGCNLD3jaAhzc4bMpRkJgSiqeD6hEaIVfL1YWkn2iwvFR8EUDpy7XiXCF4IFdP3SfK-1qpTHIq-mOGpzdkITpH8nLUOI8VpsBjn4YP2eNUYRLN6Vq~vAcCXbVeFLZQfRfSwQxA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 7.4,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi291551513/1434659607842-pgv4ql-1506351952438.mp4?Expires=1697386146&Signature=UqhW9s-XwnbgHI00tOunsFzCgapezcDY54a3808wARAFH0jvnd3YXWPnCrbw4t13zCxWheO1bixxv~3w3KOMBRVxtY4vlYtN~NV1AfkaaZaA9CLAeKid2-ycs3NnGNvlKUp4tuw-TEpXhhbc5oZx~QUTNMS38JkGiRWC-puvK0PjyUAb4uYB4oRvZ9Nm4TvLiGDox5jM6rDq~LDdvBWclJzLZFudvm1YnKVS~ZtqDFLJoKkRDrp9M3Ff9rl6iOksppIwfLJofzs0C2uw0jgiJQ7SLvAej4M-hSG6dpmzAQg4TLNM5qwIdbJov9KuCHPBd8RQMxDZ5WuWn94MS8qWqA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 6,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi4244617241/1434659607842-pgv4ql-1516394900294.mp4?Expires=1697386158&Signature=aBJFhf96TnEn1i2ORAK4LNJmBecSB3OsemofjMaxGxcw4TND3Vum6r959-zdjA4m1TB13CeEq1WHJTUC-Vv6AUqUrMZtYMIUIItSd8T-~lG7DHl0I5yLPf3VraPQvRxVIyMkp0fwSr-aDaspxrom2q-B85mZav0RCIppoxG50tLtOTz7Wdfm0WMWjdW70ZolWTa3izK4U5lpTgeCkc8DItkrjYAifQx1SdXwz2cwDGEZ~owe9G3s6Ea5uSSXDFQVoR3PpwoAF4qZv-JfqH7uf~5h7OJzvX6XaPOlXMBLGpVdbYZ6FiY79EvM3WLNCwL2WgDMPEKltBBrQsQBbbgsBw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 7.6,
    director: 'Craig Gillespie',
    starring: 'Allison Janney, Margot Robbie, Sebastian Stan'
  },
  {
    id: 4,
    name: 'Call Me by Your Name',
    releaseDate: 2017,
    genres: 'Drama, Romance',
    summary: 'CALL ME BY YOUR NAME, the new film by Luca Guadagnino, is a sensual and transcendent tale of first love, based on the acclaimed novel by Andr√© Aciman. It\'s the summer of 1983 in the north of Italy, and Elio Perlman (Timoth√©e Chalamet), a precocious 17-year-old young man, spends his days in his family\'s 17th century villa transcribing and playing classical music, reading, and flirting with his friend Marzia (Esther Garrel). Elio enjoys a close relationship with his father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture, and his mother Annella (Amira Casar), a translator, who favor him with the fruits of high culture in a setting that overflows with natural delights. While Elio\'s sophistication and intellectual gifts suggest he is already a fully-fledged adult, there is much that yet remains innocent and unformed about him, particularly about matters of the heart. One day, Oliver (Armie Hammer), a 24-year-old American college graduate student working on his...',
    shortSummary: 'In 1980s Italy, a romance blossoms between a seventeen year-old student and the older man hired as his father\'s research assistant.',
    duration: 132,
    imageSource: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg',
    backgroundImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
    trailerSource: 'https://imdb-video.media-imdb.com/vi1152171801/1434659607842-pgv4ql-1568307834677.mp4?Expires=1697386165&Signature=cLRs0PAfynzDROrBp7grdwtshRe-KMFLcdrLD6v-xVNbYa7EX7IeB4YEQJFDzJizCSDGGdDf3lmtoHmKwXedxgcfFiMbpCaZ8YHTeqvGDvya~NC8j4MXQhs1dcjfuyZO8DoQjD8tIn3KwAU3M4dBYcXsaCd56idnzVU1Y4zYS2yVx14vEQMKNz2O38n4n7tHnERXVtBdlm-rM2wStVbWhM9HnMoG5mYbxypiCX0oYnhp5~0nPp~-047sJcWvnfj7W1dOpQTlpGOOuL5wvgqdFLk6h3IlfgWs6JCpoEWf-qlh23MAO~L-qLtXdw~u7KJpZ5fQPypMaDtsiBzMAZugRw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 8,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi734968089/1434659607842-pgv4ql-1500561160307.mp4?Expires=1697386172&Signature=Zahi3mM9BolpxVMcCDLoTNjVUxkbshgassOO1C5Cral8Cx8qjZVUMSQ8SPawwRbymPwG7HkViL5OC8OkX1WVNDcK7TvNJLmSCiBkPZBdQo1HnbHypq9RO8nFNS~k6qhhRz06NO~2eFX8AFIw2WB6dHP3IYIGx81-ghtb1cMKRe6LTd--~ACeMDdbqyb0NMZnDYJUC2GKXhDrR35AM3Kedqr0y27iUbp2vOJLyycbQqfWUHmVdwOAA3xTNskpXqBBbqPxCfeLyviN04oZOarPLEpbv16TxRW-g7R7cg1IWy3ZZeXQDlOmNBQJnXHWrcHSnaH7RjHU2tXD~4PRT8KOzw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 6.8,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi4175083801/1434659607842-pgv4ql-1499091693227.mp4?Expires=1697386179&Signature=BJTj9rA56YfsCVYmcJy1bf6ISU-WIk46skLavYf6MPeiIJgwP30KeMGqme9lvolWnn--DxwYxyYuSUq49CZJAvIFOAylaJK6KX2MgWs5CPkgQG3u6V5xaWRZ4ZSKjipXiOpmmrkLaJ1KFOsh72IFiW7LdAeKC0CRLDdjTv3ZzUVnJoxYvy9l2TX5dIvSx6viz-qP8Stwu1wrURtwr31UEJ13q~9-VMqj0OAwETLt7n4LuHg40ORAudLitfz4i3KvEXa7l4C~NDZ9O59bO2g-UtiQML1JKKAIiEr3k306cgqZxEzJvEyJfE9nwEJ5cFa2xf~7a9P-T8PKVoNNPrhxgQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 7.5,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi2514728473/1434659607842-pgv4ql-1478184782082.mp4?Expires=1697386186&Signature=J9JR1Z7HR1yaMgCR8YMepzaXvHUw2h5a-Ecm0pQ4LkQM-ivl9uDF2pP~aAlJtrFnEZBs1JCCNUtMb63WovGjZ7BStr74Kt3xs9lS6NO5OhUuM3SnNZ~zO4B7V9txE8fI6~IeqTJlc8ZxvVYN4Lqp6dsqpxOLNqqNFLNxM4PyviTQM2G7x8jMf6CoA63ShUK3uJPTt5NGJwq3EZct6RMRTnPyaB-gVMqK8SxCtINZ8DTWKy5b7u38h4HRG1FS3AwX9zT1268bquGbjV1d5K3J-2NFCeF~eMKQhjNLEFuYEp8OKHUrmXoZIW0G9fw4nYjbTi3axM~k~nj9N1yQOK14AQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 8.8,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi830387737/1434659607842-pgv4ql-1487801091696.mp4?Expires=1697386192&Signature=cW73Hs6QtSS43PU9~VJvgQZuow8TTshs4arlSj845~wXIT5~5nUHwC0D-4-lFbvr62bhqaI20tyksm2KwewW7wm14ICcaz8NZY8gSBkHuiLavIeIUX0uN968ZPKDWVpxwgUk1I2EzX2jTku9Fz5uBzfiFybZa7NFuKp9pLTjkbHEKHXq9O0x2FNMJFdx-nOGtGwhJshkfu2qp374mgR0ad5IArcLCLlCriK8Q3gCsQiWRUr7s5tuDrYpX-qDfz6QGFvgrc0sfZafpXIZ4eUPDxj3WgTdNwz~HT2itJoHXGnjn~WDvcunChFZrElKiYkuBiphuUP0duly175xqah3zw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 7.8,
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
    trailerSource: 'https://imdb-video.media-imdb.com/vi3400709913/1434659607842-pgv4ql-1466431967581.mp4?Expires=1697386198&Signature=LX3Autvghl~CZYj~c31gkybEaef1LzaBr7tUbZmbZSr0hn-G2DF7TlHYj-T-eJa7Fh1dWaAvC-it9n2uwECLgxfdshbQ07NQAGgU2LqBNOj0c0jLHhID9XYNLMsmBSiMxkonkw4BtVUEaDRc1mmpbd5XaDBGJ2uRkDYc6wdGKTUxX4PnnSAWkkKL1rtU2JjTiGu3En9SXLwtaNMnvtw2sc5Gh6lro0wWK4QCqybG927i~e5~~vkeGAdD90CkEQb1OZsPFs2ej5rTvdPtNlcP83SkUsrM9cSVK8j8yW5Gqm4ipBsrmMrRt7oLII9hEIPN2-HzMUvKjYTB4inxehYi9Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    rating: 6.7,
    director: 'Tim Burton',
    starring: 'Asa Butterfield, Eva Green, Samuel L. Jackson'
  }
];
