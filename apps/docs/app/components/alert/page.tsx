import { Alert, Button } from "@ackplus/ui";
import { ComponentPage, Example, PropsTable } from "../../../components/ComponentLayout";

export default function AlertPage() {
  return (
    <ComponentPage
      title="Alert"
      description="Alerts provide brief messages about app processes. The component offers four severity levels that set a distinctive icon and color."
      apiReference={{
        title: "API",
        items: [
          { name: "Alert", href: "#alert-api" }
        ]
      }}
    >
      {/* Basic Alert */}
      <Example
        title="Basic alert"
        description="The Alert comes with three variants: soft (default), solid, and outline."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function BasicAlerts() {
  return (
    <div className="space-y-4">
      <Alert variant="soft" title="Soft Alert">
        This is a soft alert with default styling.
      </Alert>
      <Alert variant="solid" title="Solid Alert">
        This is a solid alert with strong emphasis.
      </Alert>
      <Alert variant="outline" title="Outline Alert">
        This is an outline alert with subtle styling.
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert variant="soft" title="Soft Alert">
            This is a soft alert with default styling.
          </Alert>
          <Alert variant="solid" title="Solid Alert">
            This is a solid alert with strong emphasis.
          </Alert>
          <Alert variant="outline" title="Outline Alert">
            This is an outline alert with subtle styling.
          </Alert>
        </div>
      </Example>

      {/* Severity Levels */}
      <Example
        title="Severity levels"
        description="Use the color prop to indicate different types of alerts using semantic colors."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function SeverityAlerts() {
  return (
    <div className="space-y-4">
      <Alert color="info" title="Info">
        This is an info alert — check it out!
      </Alert>
      <Alert color="success" title="Success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="warning" title="Warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="error" title="Error">
        This is an error alert — check it out!
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert color="info" title="Info">
            This is an info alert — check it out!
          </Alert>
          <Alert color="success" title="Success">
            This is a success alert — check it out!
          </Alert>
          <Alert color="warning" title="Warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert color="error" title="Error">
            This is an error alert — check it out!
          </Alert>
        </div>
      </Example>

      {/* With Icons */}
      <Example
        title="With icons"
        description="Add icons to your alerts to provide visual context and improve recognition."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function IconAlerts() {
  return (
    <div className="space-y-4">
      <Alert 
        color="success" 
        title="Success"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        Your profile has been updated successfully.
      </Alert>
      
      <Alert 
        color="warning" 
        title="Warning"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        }
      >
        Your subscription expires in 3 days.
      </Alert>
      
      <Alert 
        color="error" 
        title="Error"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        Something went wrong. Please try again.
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert 
            color="success" 
            title="Success"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            Your profile has been updated successfully.
          </Alert>
          
          <Alert 
            color="warning" 
            title="Warning"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            }
          >
            Your subscription expires in 3 days.
          </Alert>
          
          <Alert 
            color="error" 
            title="Error"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            Something went wrong. Please try again.
          </Alert>
        </div>
      </Example>

      {/* No Title */}
      <Example
        title="Without title"
        description="Alerts can be used without a title for simpler messages."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function NoTitleAlerts() {
  return (
    <div className="space-y-4">
      <Alert color="info">
        This is a simple info message without a title.
      </Alert>
      <Alert color="success">
        Operation completed successfully.
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert color="info">
            This is a simple info message without a title.
          </Alert>
          <Alert color="success">
            Operation completed successfully.
          </Alert>
        </div>
      </Example>

      {/* Solid Variants */}
      <Example
        title="Solid variants"
        description="Solid alerts provide strong emphasis and are ideal for critical messages."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function SolidAlerts() {
  return (
    <div className="space-y-4">
      <Alert variant="solid" color="info" title="Important Information">
        This information requires your immediate attention.
      </Alert>
      <Alert variant="solid" color="success" title="Successfully Completed">
        Your request has been processed successfully.
      </Alert>
      <Alert variant="solid" color="warning" title="Action Required">
        Please verify your email address to continue.
      </Alert>
      <Alert variant="solid" color="error" title="Critical Error">
        System maintenance required. Please contact support.
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert variant="solid" color="info" title="Important Information">
            This information requires your immediate attention.
          </Alert>
          <Alert variant="solid" color="success" title="Successfully Completed">
            Your request has been processed successfully.
          </Alert>
          <Alert variant="solid" color="warning" title="Action Required">
            Please verify your email address to continue.
          </Alert>
          <Alert variant="solid" color="error" title="Critical Error">
            System maintenance required. Please contact support.
          </Alert>
        </div>
      </Example>

      {/* Outline Variants */}
      <Example
        title="Outline variants"
        description="Outline alerts provide subtle emphasis with colored borders."
        code={`import { Alert } from "@ackplus/tailwind-ui";

export function OutlineAlerts() {
  return (
    <div className="space-y-4">
      <Alert variant="outline" color="info" title="Information">
        This is additional information for your reference.
      </Alert>
      <Alert variant="outline" color="success" title="Success">
        Task completed without any issues.
      </Alert>
      <Alert variant="outline" color="warning" title="Notice">
        Please review the following items.
      </Alert>
      <Alert variant="outline" color="error" title="Error">
        Unable to process your request.
      </Alert>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          <Alert variant="outline" color="info" title="Information">
            This is additional information for your reference.
          </Alert>
          <Alert variant="outline" color="success" title="Success">
            Task completed without any issues.
          </Alert>
          <Alert variant="outline" color="warning" title="Notice">
            Please review the following items.
          </Alert>
          <Alert variant="outline" color="error" title="Error">
            Unable to process your request.
          </Alert>
        </div>
      </Example>

      {/* Real-world Examples */}
      <Example
        title="Real-world usage"
        description="Common patterns for using alerts in applications."
        code={`import { Alert, Button } from "@ackplus/tailwind-ui";

export function RealWorldAlerts() {
  return (
    <div className="space-y-6">
      {/* Form validation */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Form Validation</h4>
        <Alert color="error" title="Validation Error">
          Please fix the following errors:
          <ul className="mt-2 list-disc list-inside">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
          </ul>
        </Alert>
      </div>
      
      {/* System status */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">System Status</h4>
        <Alert 
          variant="outline" 
          color="warning" 
          title="Scheduled Maintenance"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        >
          System will be unavailable on Sunday, 2:00 AM - 4:00 AM UTC.
        </Alert>
      </div>
      
      {/* Success with action */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Success with Action</h4>
        <Alert color="success" title="Profile Updated">
          Your profile has been successfully updated.
          <div className="mt-3">
            <Button size="sm" variant="outline" color="success">
              View Profile
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}`}
      >
        <div className="space-y-6 w-full">
          {/* Form validation */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Form Validation</h4>
            <Alert color="error" title="Validation Error">
              Please fix the following errors:
              <ul className="mt-2 list-disc list-inside">
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
              </ul>
            </Alert>
          </div>
          
          {/* System status */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">System Status</h4>
            <Alert 
              variant="outline" 
              color="warning" 
              title="Scheduled Maintenance"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              System will be unavailable on Sunday, 2:00 AM - 4:00 AM UTC.
            </Alert>
          </div>
          
          {/* Success with action */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Success with Action</h4>
            <Alert color="success" title="Profile Updated">
              Your profile has been successfully updated.
              <div className="mt-3">
                <Button size="sm" variant="outline" color="success">
                  View Profile
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </Example>

      {/* Props Table */}
      <PropsTable
        title="Alert Props"
        props={[
          {
            name: "variant",
            type: "'soft' | 'solid' | 'outline'",
            default: "'soft'",
            description: "The variant to use for the alert appearance."
          },
          {
            name: "color",
            type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
            default: "'primary'",
            description: "The color of the alert. Uses semantic colors from theme."
          },
          {
            name: "title",
            type: "React.ReactNode",
            description: "The title of the alert. If not provided, only the description will be shown."
          },
          {
            name: "icon",
            type: "React.ReactNode",
            description: "An optional icon to display at the beginning of the alert."
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes to apply to the alert."
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "The content/description of the alert."
          }
        ]}
      />
    </ComponentPage>
  );
}