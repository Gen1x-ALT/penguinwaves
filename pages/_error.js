// pages/_error.js
import React from "react";
import PropTypes from "prop-types";
import Error from "next/error";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyError = ({ statusCode }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header title="Whoops... We fucked up." />
        <p>
          {statusCode
            ? "By the looks of it, this error really looks like our fault. Sorry about that... Try again later, alright?"
            : "By the looks of it, this error really looks like your fault. You should probably try again later, refresh this page, or contact us in our Discord Server."}
        </p>
        <small>
          for the dev nerds:{" "}
          {statusCode
            ? "this error occured on our end, dont worry, you are not to blame for this (server-side)"
            : "this is probably your fault, but it might be ours somehow (client-side)"}
          .<br></br>error code: {statusCode}
        </small>
      </main>
    </div>
  );
};

MyError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

MyError.propTypes = {
  statusCode: PropTypes.number,
};

MyError.defaultProps = {
  statusCode: null,
};

export default MyError;
