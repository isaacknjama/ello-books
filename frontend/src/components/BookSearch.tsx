import React from 'react';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import Fade from '@mui/material/Fade';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BookSearchProps {
  books: Book[];
  loading: boolean;
  readingList: Book[];
  handleAddToReadingList: (book: Book, Transition: any) => void;
  getTextFieldStyles: () => any;
}

export const BookSearch: React.FC<BookSearchProps> = ({
  books,
  loading,
  readingList,
  handleAddToReadingList,
  getTextFieldStyles,
}) => {
  const bookProps = {
    options: books,
    getOptionLabel: (book: { title: string; author: string }) =>
      `${book.title} by ${book.author}`,
  };

  return (
    <Box sx={{ width: '40%', margin: 'auto', marginTop: '2rem' }}>
      <Autocomplete
        {...bookProps}
        disableCloseOnSelect
        loading={loading}
        renderOption={(props, book) => (
          <li {...props}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <span>{book.title}</span>
              {readingList.some((item) => item.title === book.title) ? (
                <Button disabled variant='contained' color='primary' size='small'>
                  Added to Reading List
                </Button>
              ) : (
                <Button
                  variant='contained'
                  sx={{
                    background: '#28B8B8',
                    ':hover': { background: '#28B8B8' },
                  }}
                  size='small'
                  onClick={() => handleAddToReadingList(book, Fade)}
                >
                  Add to Reading List
                </Button>
              )}
            </Box>
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} variant='outlined' label='Search Books' sx={getTextFieldStyles()} />
        )}
      />
    </Box>
  );
};
