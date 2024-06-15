import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface ReadingListProps {
  readingList: Book[];
  handleRemoveFromReadingList: (index: number) => void;
  imageList: { [key: string]: string };
  getCols: () => number;
}

export const ReadingList: React.FC<ReadingListProps> = ({
  readingList,
  handleRemoveFromReadingList,
  imageList,
  getCols,
}) => (
  <Box sx={{ width: '100%', marginTop: '2rem' }}>
    <h2>Reading List</h2>
    <ImageList sx={{ width: '100%' }} cols={getCols()}>
      {readingList.map((book, index) => (
        <ImageListItem key={index}>
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
                height='450'
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
                onClick={() => handleRemoveFromReadingList(index)}
              >
                Remove from Reading List
              </Button>
            </CardContent>
          </Card>
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);
