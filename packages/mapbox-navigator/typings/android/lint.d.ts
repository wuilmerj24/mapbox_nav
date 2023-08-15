/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module lint {
        export class LifecycleIssueRegistry {
          public static class: java.lang.Class<com.mapbox.maps.lint.LifecycleIssueRegistry>;
          public getIssues(): java.util.List<com.android.tools.lint.detector.api.Issue>;
          public constructor();
          public getVendor(): com.android.tools.lint.client.api.Vendor;
          public getApi(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module lint {
        export class LifecycleMethodDetector {
          public static class: java.lang.Class<com.mapbox.maps.lint.LifecycleMethodDetector>;
          public static ISSUE: com.android.tools.lint.detector.api.Issue;
          public getApplicableMethodNames(): java.util.List<string>;
          public constructor();
          public visitMethodCall(param0: com.android.tools.lint.detector.api.JavaContext, param1: any, param2: com.intellij.psi.PsiMethod): void;
        }
        export module LifecycleMethodDetector {
          export class Issues {
            public static class: java.lang.Class<com.mapbox.maps.lint.LifecycleMethodDetector.Issues>;
          }
        }
      }
    }
  }
}

//Generics information:
