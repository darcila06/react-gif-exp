import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Prueba GifExpertApp', () => { 
    test('Debe aparecer el titulo de la aplicacion', () => { 
        render(<GifExpertApp/>)
        screen.debug()
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
     })
 })