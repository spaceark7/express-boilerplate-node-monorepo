export interface Resources {
    "error": {
      "bad_request": "Bad request.",
      "conflict": "Conflict detected.",
      "database": "Database error.",
      "forbidden": "Forbidden.",
      "internal_server": "Internal server error.",
      "jwt": {
        "expired": "JWT token expired.",
        "invalid": "Invalid JWT token.",
        "missing": "Missing JWT token."
      },
      "not_found": "Resource not found.",
      "unauthorized": "Unauthorized.",
      "validation": "Validation error."
    },
    "farewell": "Goodbye",
    "greeting": "Hello",
    "group": {
      "created": "Group created successfully.",
      "deleted": "Group deleted successfully.",
      "description": "Description",
      "name": "Group name",
      "not_found": "Group not found.",
      "updated": "Group updated successfully."
    },
    "menu": {
      "created": "Menu created successfully.",
      "deleted": "Menu deleted successfully.",
      "icon": "Icon",
      "is_active": "Is active",
      "label": "Label",
      "name": "Menu name",
      "not_found": "Menu not found.",
      "order_number": "Order number",
      "path": "Path",
      "updated": "Menu updated successfully."
    },
    "success": {
      "created": "Created successfully.",
      "deleted": "Deleted successfully.",
      "operation": "Operation completed successfully.",
      "updated": "Updated successfully."
    },
    "user": {
      "created": "User created successfully.",
      "deleted": "User deleted successfully.",
      "forbidden": "You do not have permission to perform this action.",
      "invalid_email": "Invalid email address.",
      "invalid_password": "Password must be at least 6 characters.",
      "invalid_phone": "Invalid phone number.",
      "login_failed": "Login failed. Please check your credentials.",
      "login_success": "Login successful.",
      "not_found": "User not found.",
      "profile": {
        "email_secondary": "Secondary email",
        "first_name": "First name",
        "last_name": "Last name",
        "phone": "Phone number"
      },
      "unauthorized": "Unauthorized access.",
      "updated": "User updated successfully."
    },
    "validation": {
      "invalid_date": "Invalid date.",
      "invalid_enum": "Invalid value.",
      "invalid_format": "Invalid format.",
      "max_length": "Maximum length is {{max}} characters.",
      "min_length": "Minimum length is {{min}} characters.",
      "required": "This field is required."
    },
    "welcome": "Welcome to {{appName}}!"
}

export default enResources;
