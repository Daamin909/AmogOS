export const handleRefresh = (setURL, url1, url2) => {
  setURL((prev) => (prev == url1 ? url2 : url1));
};

export const handleClose = (setIsVisible) => {
  setIsVisible(false);
};

export const handleMinimize = (setIsVisible) => {
  setIsVisible(false);
};

export const handleDragStop = (e, data, isMaximized, setPosition) => {
  if (!isMaximized) {
    setPosition({ x: data.x, y: data.y });
  }
};

export const handleMaximize = (setIsMaximized, isMaximized, setPosition) => {
  setIsMaximized(!isMaximized);
  if (!isMaximized) {
    setPosition({ x: 0, y: 0 });
  } else {
    setPosition({ x: 20, y: 20 });
  }
};
