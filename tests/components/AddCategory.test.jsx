import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Describir pruebas en AddCategory', () => {
  test('debe cambiar el valor de la caja de texto', () => {

    render( <AddCategory onNewCategory={ () => {} }/> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama'} });

    expect( input.value ).toBe('Saitama');
    
  });

  test('debe de llamar a obNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';

    render( <AddCategory onNewCategory={ () => {} }/> );
    
    //toma las referencias del input y del form
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue} });
    fireEvent.submit( form );

    expect( input,value ).toBe('');

  })
  
  
})
