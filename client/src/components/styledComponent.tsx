import styled from 'styled-components'

export const PublicPagesContainer = styled.div.attrs({
    className: '',
})`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const PageWrapper = styled.div.attrs({
    className: '',
})`
    display:flex;
    flex:1;
    height:100%;
`

export const Form = styled.div.attrs({
    className: '',
})`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h1.attrs({
    className: 'h1',
})``

export const Wrapper = styled.div.attrs({
    className: '',
})` 
   height:100vh; 
`
export const FormWrapper = styled.div.attrs({
    className: 'form-group  align-items-center justify-content-center',
})`
    display:flex;
    flex-direction: column;
    flex:1;
    height:100%;
`

export const Label = styled.label`
    // margin: 5px;
`

export const InputText = styled.input.attrs({
    className: 'form-control',
})`
    // margin: 5px;
`

export const ButtonPrimary = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

export const ButtonSecondary = styled.button.attrs({
    className: `btn btn-secondary`,
})`
    margin: 15px 15px 15px 5px;
`

export const ButtonDanger = styled.button.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

export const InputGroup = styled.div.attrs({
    className: `input-group mb-2`,
})``

export const InputGroupPrepend = styled.div.attrs({
    className: `input-group-prepend`,
})``

export const InputGroupText = styled.div.attrs({
    className: `input-group-text`,
})``

export const FormControl = styled.input.attrs({
    className: `form-control`,
})``

export const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

export const ButtonGroup = styled.div.attrs({
    className: ``,
})`
`

// export default componentWrapper;
