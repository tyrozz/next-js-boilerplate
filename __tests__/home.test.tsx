import { render, screen } from '@testing-library/react'
import Home from '@/app/(marketing)/page'

describe('Home', () => {
    it('should have About Page button', () => {
        render(<Home />)
        const myElem = screen.getByText(/About Page/i)
        expect(myElem).toBeInTheDocument()
    })
})
