export const formatTimestamp = (timestamp) => {
  const now = new Date();
  const commentDate = new Date(timestamp);

  now.setHours(0, 0, 0, 0);
  commentDate.setHours(0, 0, 0, 0);

  const diffTime = now - commentDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "today";
  } else if (diffDays === 1) {
    return "yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 14) {
    return "a week ago";
  } else {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} weeks ago`;
  }
};
