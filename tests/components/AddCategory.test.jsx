import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Describir pruebas en AddCategory', () => {
  test('debe cambiar el valor de la caja de texto', () => {

    render( <AddCategory onNewCategory={ () => {} }/> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama'} });

    expect( input.value ).toBe('Saitama');
    
  });

  test('debe de llamar a onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    //mock de función onNewCategory
    const onNewcategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewcategory }/> );
    
    //toma las referencias del input y del form
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue} });
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    //se usan los toHave para evalual la fn
    expect( onNewcategory ).toHaveBeenCalled();
    expect( onNewcategory ).toHaveBeenCalledTimes(1);
    expect( onNewcategory ).toHaveBeenCalledWith( inputValue );

  })

  test('no debe de llamar onNewCategory si el input esta vacio', () => {

    const onNewcategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewcategory }/> );

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewcategory ).toHaveBeenCalledTimes(0);
    
  })
  
  
  
})
