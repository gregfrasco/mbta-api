# MBTA-api

An mbta api that I am building out. This is a work in progress. If need a function, open an issue or make a pull request.

## Install

```bash
npm i mbta-api
```

## Usage

ts
```typescript
import { Client } from 'mbta-api';

const client = new Client();

const redLineAlerts = client.getAlerts('Red');
redLineAlerts[0].cause;
```
