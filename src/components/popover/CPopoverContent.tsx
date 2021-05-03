import React, { CSSProperties, forwardRef } from 'react'
import classNames from 'classnames'
import { CPopoverProps } from './CPopover'
import { PopperChildrenProps } from 'react-popper'

interface CPopoverContentProps
  extends Omit<CPopoverProps, 'placement' | 'children' | 'trigger'>,
    Omit<PopperChildrenProps, 'placementPostfix' | 'style'> {
  transitionClass?: string
  style?: CSSProperties
  placementClassNamePostfix?: string
}

export const CPopoverContent = forwardRef<HTMLDivElement, CPopoverContentProps>(
  ({ content, title, placementClassNamePostfix, arrowProps, style, transitionClass }, ref) => (
    <>
      <div
        className={classNames(`popover bs-popover-${placementClassNamePostfix}`, transitionClass)}
        // className={`popover bs-popover-${placementClassNamePostfix}`}
        ref={ref}
        style={style}
        role="tooltip"
      >
        <div className="popover-arrow" {...arrowProps}></div>
        <div className="popover-header">{title}</div>
        <div className="popover-body">{content}</div>
      </div>
    </>
  ),
)

CPopoverContent.displayName = 'CPopoverContent'