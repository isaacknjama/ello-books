import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Theme } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';

import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image5.webp';
import image6 from './assets/image6.webp';
import image7 from './assets/image7.webp';
import image8 from './assets/image8.webp';
import image9 from './assets/image9.webp';
import image10 from './assets/image10.webp';

import { BookSearch } from './components';
import { ReadingList } from './components';
import { BooksDisplay } from './components';
import { Notification } from './components';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface SnackBarState {
  open: boolean;
  Transition: React.ComponentType<
    TransitionProps & { children: React.ReactElement }
  >;
  message: string;
}

type TransitionComponent = React.ComponentType<TransitionProps>;

const imageList: { [key: string]: string } = {
  'assets/image1.webp': image1,
  'assets/image2.webp': image2,
  'assets/image3.webp': image3,
  'assets/image4.webp': image4,
  'assets/image5.webp': image5,
  'assets/image6.webp': image6,
  'assets/image7.webp': image7,
  'assets/image8.webp': image8,
  'assets/image9.webp': image9,
  'assets/image10.webp': image10,
};

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [snackBarState, setSnackBarState] = useState<SnackBarState>({
    open: false,
    Transition: Fade,
    message: '',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const theme = useTheme<Theme>();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    if (isLg) return 4;
    return 1;
  };

  const getTextFieldStyles = () => ({
    border: '1px solid #28B8B8',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#28B8B8',
      },
      '&:hover fieldset': {
        borderColor: '#28B8B8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#28B8B8',
      },
    },
    borderRadius: '8px',
    width: isXs ? '100%' : isSm ? '80%' : isMd ? '100%' : '100%',
  });

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Books {
                books {
                  author
                  coverPhotoURL
                  readingLevel
                  title
                }
              }
            `,
          }),
        });
        const booksData = await response.json();
        setBooks(booksData.data.books);
      } catch (err) {
        console.error('Error fetching books: ', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddToReadingList = (
    book: Book,
    Transition: TransitionComponent,
  ) => {
    if (!readingList.some((item) => item.title === book.title)) {
      setReadingList((prevList) => [...prevList, book]);
      setSnackBarState({
        open: true,
        Transition,
        message: `${book.title} successfully added to reading list 🚀`,
      });
    } else {
      console.log(`${book.title} is already on the list.`);
      setSnackBarState({
        open: true,
        Transition,
        message: `${book.title} is already on the list`,
      });
    }
  };

  const handleClose = () => {
    setSnackBarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const handleRemoveFromReadingList = (index: number) => {
    setReadingList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <React.Fragment>
      <BookSearch
        books={books}
        loading={loading}
        readingList={readingList}
        handleAddToReadingList={handleAddToReadingList}
        getTextFieldStyles={getTextFieldStyles}
      />
      <Notification snackBarState={snackBarState} handleClose={handleClose} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        {readingList.length > 0 ? (
          <ReadingList
            readingList={readingList}
            handleRemoveFromReadingList={handleRemoveFromReadingList}
            imageList={imageList}
            getCols={getCols}
          />
        ) : (
          <BooksDisplay
            books={books}
            handleAddToReadingList={handleAddToReadingList}
            imageList={imageList}
            page={page}
            rowsPerPage={rowsPerPage}
            handlePageChange={handlePageChange}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            getCols={getCols}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

export default App;
