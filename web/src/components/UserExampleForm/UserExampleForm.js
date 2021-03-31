import {
  DateField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserExampleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userExample?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.userExample?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.userExample?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="birthday"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birthday
        </Label>
        <DateField
          name="birthday"
          defaultValue={props.userExample?.birthday}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="birthday" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserExampleForm
