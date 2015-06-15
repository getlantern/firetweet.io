# FireTweet.io

The website for FireTweet, an Twitter client on Android.

## Run

Static page

```
compass watch --css-dir css
python -m SimpleHTTPServer
```

## Deploy

```
s3cmd sync --recursive --exclude ".git/*" --exclude ".DS_Store" --exclude ".sass-cache/*" setacl --acl-public --recursive . s3://firetweet.io
```
