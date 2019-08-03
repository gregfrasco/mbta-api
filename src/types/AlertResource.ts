/**
 * An effect (enumerated in 'undefinedattributes/effect' and human-readable in 'undefinedattributes/service_effect') on a provided service (facility, route, route type, stop and/or trip in '/undefinedattributes/informed_entity') described by a banner ('undefinedattributes/banner'), short header ('undefinedattributes/short_header'), header 'undefinedattributes/header', and description ('undefinedattributes/description') that is active for one or more periods ('undefinedattributes/active_period') caused by a cause ('undefinedattribute/cause') that somewhere in its lifecycle (enumerated in 'undefinedattributes/lifecycle' and human-readable in 'undefinedattributes/timeframe').

See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-alert)

## Descriptions

There are 5 descriptive attributes.

| JSON pointer                                | Usage                                                                           |
|---------------------------------------------|---------------------------------------------------------------------------------|
| 'undefinedattributes/banner'       | Display as alert across application/website                                     |
| 'undefinedattributes/short_header' | When 'undefinedattributes/header' is too long to display               |
| 'undefinedattributes/header'       | Used before showing and prepended to 'undefinedattributes/description' |
| 'undefinedattributes/description'  | Used when user asks to expand alert.                                            |

## Effect

| JSON pointer                                  |                |
|-----------------------------------------------|----------------|
| 'undefinedattributes/effect'         | Enumerated     |
| 'undefinedattributes/service_effect' | Human-readable |

## Timeline

There are 3 timeline related attributes

| JSON pointer                                 | Description                                                                              |
|----------------------------------------------|------------------------------------------------------------------------------------------|
| 'undefinedattributes/active_period' | Exact Date/Time ranges alert is active                                                   |
| 'undefinedattributes/lifecycle'     | Enumerated, machine-readable description of 'undefinedattributes/active_period' |
| 'undefinedattributes/timeframe'     | Human-readable description of 'undefinedattributes/active_period'               |

 */
export class AlertResource {
  /**
   * The JSON-API resource type
   */
  type: string;

}