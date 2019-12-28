# jquery.mprogressbar

### A simple jQuery plugin for progressbar

This plugin provides a simple jquery progressbar functionality

## Basic Usage

1. Include jQuery:

    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    ```

2. Include plugin's code:

    ```html
    <link rel="stylesheet" href="src/css/jQuery.mprogressbar.min.css">
    <script src="src/js/jQuery.mprogressbar.min.js"></script>
    ```    

3. Include the plugin container in your HTML:

  ```html
  <div class="progress-bar"></div>
  ```    

4. Call the plugin:

  ```javascript
  $(".progress-bar").mprogressbar();
  ```
  
  ## Default Options

```javascript
{
    pbar_height: 30, // Progressbar Height
    pbar_margin: 40, // Progressbar Top/Bottom Margin
    pbar_color: '#eeeeee', // Progressbar Background Color
    pbar_border_size: 0, // Progressbar Border Size
    pbar_border_color: '#eeeeee', // Progressbar Border Color
    pbar_border_radius: 0, // Progressbar Border Radius

    pgress_height: 30, // Progress Indicator Height
    pgress_width: 50, // Progress Indicator Width (in Percentage)
    pgress_color: '#e55039', // Progress Indicator Color
    pgress_border_size: 0, // Progress Indicator Border Size
    pgress_border_color: '#e55039', // Progress Indicator Border Color
    pgress_border_radius: 0, // Progress Indicator Border Radius
    title: 'Progress Counter', // Progress Title
    show_title: true, // Display or Hide Progress Title (true / false)
    title_color: '#ffffff', // Title Color
    title_size: 14, // Title Font Size
    title_display: 'inside', // inside, outside
    duration: 1500, // Progress Process Duration

    show_counter: true, // Show or hide counter text (true / false)
    counter_display: 'inside', // inside, outside, intact
    counter_size: 12, // Counter text font size
    counter_padding: 0, // Counter text padding
    counter_bgcolor: 'unset', // Counter Background Color
    counter_color: '#e55039', // Counter Text Color
    counter_border_radius: 0, // Counter Border Radius
}
```

## Demo
[Demo Page](https://mysticalthemes.com/jquery-plugins/mprogressbar)

## License

[MIT License](https://imalliaros.mit-license.org/) © bnayawebguy