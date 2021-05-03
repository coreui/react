import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CFormProps extends HTMLAttributes<HTMLFormElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the forms component.
   */
  validated?: boolean
}

export const CForm = forwardRef<HTMLFormElement, CFormProps>(
  ({ children, className, validated, ...rest }, ref) => {
    const _className = classNames({ 'was-validated': validated }, className)
    return (
      <form className={_className} {...rest} ref={ref}>
        {children}
      </form>
    )
  },
)

CForm.displayName = 'CForm'