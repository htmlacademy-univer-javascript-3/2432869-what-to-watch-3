export type FilmReviewData = {
  id: number;
  text: string;
  author: string;
  publishDate: Date;
  rating: number;
}

export const FilmReviewsData: ReadonlyArray<FilmReviewData> = [
  {
    id: 0,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    publishDate: new Date(2016, 12, 24),
    rating: 8.9,
  },
  {
    id: 1,
    text: 'Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    publishDate: new Date(2015, 11, 18),
    rating: 8.0,
  },
  {
    id: 2,
    text: 'I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    publishDate: new Date(2015, 11, 18),
    rating: 8.0,
  },
  {
    id: 3,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    author: 'Matthew Lickona',
    publishDate: new Date(2016, 12, 20),
    rating: 7.2,
  },
  {
    id: 4,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    publishDate: new Date(2016, 12, 20),
    rating: 7.6,
  },
  {
    id: 5,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    publishDate: new Date(2016, 12, 20),
    rating: 7.0,
  },
];
