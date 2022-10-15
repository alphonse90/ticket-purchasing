import img1 from '@public/img-1.jpg';
import img2 from '@public/img-2.jpg';
import img3 from '@public/img-3.jpg';
import img4 from '@public/img-4.jpg';
import img5 from '@public/img-5.jpg';
import img6 from '@public/img-6.jpg';
import img7 from '@public/img-7.jpg';
import img8 from '@public/img-8.jpg';

export declare type ConcertType = {
  id: number,
  title?: string,
  price?: number,
  date?: string,
  hour?: string,
  image: string,
};

export const concerts: ConcertType[] = [
  {
    id: 1,
    title: "Goog Bunny: Now more good",
    price: 15.20,
    hour: "20:00",
    date: "October 19",
    image: img1.src,
  },
  {
    id: 2,
    title: "Nightmare session",
    price: 31.00,
    hour: "22:00",
    date: "October 30",
    image: img2.src,
  },
  {
    id: 3,
    title: "Halloween Festival",
    price: 80.50,
    hour: "20:00",
    date: "October 31",
    image: img3.src,
  },
  {
    id: 4,
    title: "Edele Reborn",
    price: 99.99,
    hour: "19:00",
    date: "November 7",
    image: img4.src,
  },
  {
    id: 1,
    title: "November Rain: Rain never stops",
    price: 45.99,
    hour: "17:00",
    date: "November 11",
    image: img5.src,
  },
  {
    id: 2,
    title: "Jhon Lonnen: Live!",
    price: 30.00,
    hour: "20:30",
    date: "November 11",
    image: img6.src,
  },
  {
    id: 3,
    title: "Christmas Concert",
    price: 129.99,
    hour: "20:00",
    date: "December 25",
    image: img7.src,
  },
  {
    id: 4,
    title: "New Year Eve: Welcome 2023",
    price: 90.00,
    hour: "22:00",
    date: "December 31",
    image: img8.src,
  },
];

export const showById = (showId: number): ConcertType => {
  const concert = concerts.find((concert) => concert.id === showId);
  if (!concert) {
    throw new Error('Concert not found');
  }
  return concert;
}
