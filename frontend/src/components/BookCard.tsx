import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Fade from '@mui/material/Fade';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BookCardProps {
  book: Book;
  handleAddToReadingList: (book: Book, Transition: any) => void;
  imageList: { [key: string]: string };
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  handleAddToReadingList,
  imageList,
}) => (
  <Card
    sx={{
      width: '80%',
      margin: 'auto',
      marginBottom: '2rem',
      borderRadius: '8px',
    }}
  >
    {book.coverPhotoURL && (
      <CardMedia
        component='img'
        height={300}
        image={imageList[book.coverPhotoURL]}
        alt={book.title}
      />
    )}
    <Box textAlign='center'>
      <Typography fontWeight='bold' fontSize='16px'>
        {book.title}
      </Typography>
      <Typography fontWeight='bold' fontSize='15px'>
        {book.author}
      </Typography>
    </Box>
    <CardContent>
      <Button
        sx={{
          width: '100%',
          background: '#28B8B8',
          ':hover': { background: '#28B8B8' },
        }}
        variant='contained'
        size='small'
        onClick={() => handleAddToReadingList(book, Fade)}
      >
        Add to Reading List
      </Button>
    </CardContent>
  </Card>
);
