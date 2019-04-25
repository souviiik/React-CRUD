import React from 'react';

export const renderField = (field) => {
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
    return (
        <div className={className}>                
            <label htmlFor={field.id}>{field.label}</label>
            <small className="text-danger ml-2">{meta.touched ? meta.error: ''}</small>
            <input
                type={field.type}
                className="form-control" 
                id={field.id}
                placeholder={field.label}
                {...field.input}
            />
        </div>
    );
}