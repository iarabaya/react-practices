import { render, fireEvent, screen } from '@testing-library/react';
import Componente from '../components/form/Componente';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Ingreso Club/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("should display a form", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Componente/>);
  
  expect( queryByTestId("formulario")).toBeTruthy();
  expect( queryByPlaceholderText("Nombre")).toBeTruthy();
  expect( queryByPlaceholderText("Apellido")).toBeTruthy();
  expect( queryByPlaceholderText("Hobby")).toBeTruthy();
})

it("should display text for inputs", () => {
  const { queryByPlaceholderText } = render(<Componente/>);

  const nombreInput = queryByPlaceholderText("Nombre");

  fireEvent.change( nombreInput, { target: { value: "test" }} )
  
  expect(nombreInput.value).toBe("test");

})

it("should display name", () => {
  render(<Componente/>);

  const nombreInput = screen.queryByPlaceholderText("Nombre");

  fireEvent.change( nombreInput , { target: { value: "test" } });

  expect(screen.getByText("Nombre: test")).toBeTruthy();
})
