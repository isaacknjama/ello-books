import React from 'react';
import { Box, ImageList, ImageListItem, TablePagination } from '@mui/material';
import { BookCard } from './BookCard';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BooksDisplayProps {
  books: Book[];
  handleAddToReadingList: (book: Book, Transition: any) => void;
  imageList: { [key: string]: string };
  page: number;
  rowsPerPage: number;
  handlePageChange: (_event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getCols: () => number;
}

export const BooksDisplay: React.FC<BooksDisplayProps> = ({
  books,
  handleAddToReadingList,
  imageList,
  page,
  rowsPerPage,
  handlePageChange,
  handleChangeRowsPerPage,
  getCols,
}) => {
  const displayedBooks = books.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Box sx={{ width: '100%', marginTop: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>All Books</h2>
      <ImageList sx={{ width: '100%' }} cols={getCols()}>
        {displayedBooks.map((book, index) => (
          <ImageListItem key={index}>
            <BookCard
              book={book}
              handleAddToReadingList={handleAddToReadingList}
              imageList={imageList}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ margin: 'auto' }}>
        <TablePagination
          component='div'
          count={books.length}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};
