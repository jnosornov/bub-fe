import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Heading from '../../atoms/Heading'
import EmptyState from '../../molecules/EmptyState'

import decisions from '../../../tokens/decisions'
import AI from '../../../static/images/artificial_intelligence.svg'

const TrendList = ({ title, children }) => {
  return (
    <>
      <div className="trend-list">
        <header className={classNames("trend-title")}>
          <Heading size="3xl">{title}</Heading>
        </header>
        <div className="trend-items">
          {
            children ||
            <EmptyState
              imgSrc={AI}
              copy={`There are no ${title} yet`}
            />
          }
        </div>
      </div>
      <style jsx>{`
        .trend-list {
          max-width: 600px;
          border: 1.25px solid #eee;
        }
        .trend-title {
          border-bottom: 1px solid #eee;
          padding: ${decisions.common.padding.md.horizontal} ${decisions.common.padding.md.vertical};
        }
        .trend-items {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: ${decisions.common.padding.md.horizontal} ${decisions.common.padding.md.vertical};
        }
        .trend-items > div {
          margin-bottom: 10px;
        }

        .empty-state-box {
          width: 160px;
        }
        .empty-state {
          width: 100%;
        }
      `}</style>
    </>
  )
}

TrendList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default TrendList