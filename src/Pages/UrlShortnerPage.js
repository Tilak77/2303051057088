import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Card, CardContent } from '@mui/material';

const UrlShortenerPage = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleAddField = () => {
    if (urls.length < 5) setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
  };

  const handleSubmit = async () => {
    // Dummy API simulation
    const newResults = urls.map((urlObj, i) => ({
      ...urlObj,
      shortUrl: `http://localhost:3000/${urlObj.shortcode || 'xyz' + i}`,
      expiry: urlObj.validity || 30
    }));
    setResults(newResults);
  };

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h4">URL Shortener</Typography>
      {urls.map((url, index) => (
        <Grid container spacing={2} key={index} style={{ marginTop: 8 }}>
          <Grid item xs={4}>
            <TextField label="Long URL" fullWidth onChange={(e) => handleInputChange(index, 'longUrl', e.target.value)} />
          </Grid>
          <Grid item xs={2}>
            <TextField label="Validity (min)" type="number" fullWidth onChange={(e) => handleInputChange(index, 'validity', e.target.value)} />
          </Grid>
          <Grid item xs={2}>
            <TextField label="Shortcode (opt)" fullWidth onChange={(e) => handleInputChange(index, 'shortcode', e.target.value)} />
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" onClick={handleAddField} disabled={urls.length >= 5} style={{ marginTop: 16 }}>
        Add Another URL
      </Button>
      <Button variant="outlined" onClick={handleSubmit} style={{ marginTop: 16, marginLeft: 16 }}>
        Shorten URLs
      </Button>

      <div style={{ marginTop: 24 }}>
        {results.map((res, i) => (
          <Card key={i} style={{ marginBottom: 8 }}>
            <CardContent>
              <Typography>Original: {res.longUrl}</Typography>
              <Typography>Shortened: <a href={res.shortUrl}>{res.shortUrl}</a></Typography>
              <Typography>Expires in: {res.expiry} minutes</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UrlShortenerPage;
