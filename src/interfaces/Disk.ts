/* eslint-disable @typescript-eslint/ban-types */
interface Disk {
  "antivirus_status": {},
  "resource_id": "string",
  "share": {
    "is_root": true,
    "is_owned": true,
    "rights": "string"
  },
  "file": "string",
  "size": 0,
  "photoslice_time": "2023-07-31T12:07:42.067Z",
  "_embedded": {
    "sort": "string",
    "items": [
      {}
    ],
    "limit": 0,
    "offset": 0,
    "path": "string",
    "total": 0
  },
  "exif": {
    "date_time": "2023-07-31T12:07:42.067Z",
    "gps_longitude": {},
    "gps_latitude": {}
  },
  "custom_properties": {},
  "media_type": "string",
  "preview": "string",
  "type": "string",
  "mime_type": "string",
  "revision": 0,
  "public_url": "string",
  "path": "string",
  "md5": "string",
  "public_key": "string",
  "sha256": "string",
  "name": "string",
  "created": "2023-07-31T12:07:42.067Z",
  "sizes": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "modified": "2023-07-31T12:07:42.067Z",
  "comment_ids": {
    "private_resource": "string",
    "public_resource": "string"
  }
}

export default Disk;