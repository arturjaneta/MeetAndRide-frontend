import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="mb-4">
            <h1 className="title is-2 is-capitalized has-text-weight-bold">
              {title}
            </h1>
          </div>
          <div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Page;