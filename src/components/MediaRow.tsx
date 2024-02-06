import { SetStateAction } from 'react';
import { MediaItem } from '../types/DBTypes';

const MediaRow = (props: { mediaItem: MediaItem, setSelectedItem: (item: MediaItem) => void }) => {
  const item = props.mediaItem;
  const setSelectedItem = props.setSelectedItem;
  return (
    <tr className="media-row">
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td><button onClick={() => { setSelectedItem(item) }}>View</button></td>
    </tr>
  );
};

export default MediaRow;
