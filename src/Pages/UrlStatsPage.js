import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const UrlStatsPage = () => {
  const stats = [
    { longUrl: 'https://example.com', shortUrl: '/abcd1', hits: 3, expiry: '30 mins' },
    { longUrl: 'https://example.org', shortUrl: '/xy12', hits: 1, expiry: '45 mins' }
  ];

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h4">Shortened URL Statistics</Typography>
      <List>
        {stats.map((item, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={`Original: ${item.longUrl}`}
              secondary={`Short: http://localhost:3000${item.shortUrl}, Hits: ${item.hits}, Expires in: ${item.expiry}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UrlStatsPage;
