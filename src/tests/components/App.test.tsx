import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '@root/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@root/data';

function Wrapper({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

describe("App", () => {
    test("should show title when rendered", () => {
        
        render(<Wrapper><App /></Wrapper>, {wrapper: BrowserRouter});

        expect(screen.findAllByText(/Mosaic/i)).toBeDefined();
    }),
    test("should show h1",()=>{
      render(<Wrapper><App /></Wrapper>, {wrapper: BrowserRouter});

      expect(screen.getByRole('heading', { level: 1 })).toBeDefined();

    })
})