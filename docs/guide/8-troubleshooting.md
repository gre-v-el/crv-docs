# Troubleshooting

## Multiple file extensions error

![Multiple file extensions error](/images/guide/8-troubleshooting-multiple-file-extensions-error.png)

This error occurs when the extension tries to analyze files with different extensions. Such files might have been selected directly, or may be present in any selected directory. The analysis can only be performed on files with the same extension, as the language of the files is determined by their extension. Please select files with the same extension and try again.

## UnsupportedClassVersionError

![Unsupported class version error](/images/guide/8-troubleshooting-unsupported-class-version-error.png)

This error occurs when:
1. The extension chose to run the `.jar` version of the analyzer,
2. Your system has a Java version lower than 25

The extension comes with a few binary versions of the analyzer for different systems. When an analysis is triggered, the extension decides which analyzer to run based on the system's operating system. The `.jar` version is used when no binary analyzer is available for the system. The `.jar` version requires Java 25 or higher to run. Please update your Java version to 25 or higher and try again.