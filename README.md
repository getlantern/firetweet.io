# FireTweet.io

The website for FireTweet.

## Run

Static page

```
compass --css-dir css
python -m SimpleHTTPServer
```

## Deploy

```
s3cmd sync --recursive --exclude ".git/*" setacl --acl-public --recursive . s3://firetweet.io
```
