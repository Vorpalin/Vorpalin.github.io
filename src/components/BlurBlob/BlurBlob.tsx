import React from 'react'
import PropTypes from "prop-types"

interface BlurBlobProps {
  position: { top: string; left: string };
  size: { width: string; height: string };
}

function BlurBlob({ position, size }: BlurBlobProps)
{
    const { top, left } = position;
    const { width, height } = size;

    return (
        <div className="absolute"
        style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)"
        }}
        >

            <div className="w-full h-full bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        </div>
    );
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;