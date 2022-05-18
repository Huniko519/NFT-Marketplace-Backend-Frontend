import React from 'react';
import Select from 'react-select'

const SortSelect = ({className, handleSort, options, defaultValue, width}) => {
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          background: '#0d1022',
          color: state.selectProps.menuColor,
          padding: 10,
          zIndex: 100
        }),
        
        control: (_, { selectProps: { width }}) => ({
            width: width,
            display: 'flex',
            color: '#7f81a2',
            borderBottom: '1px solid #45227e',
            paddingLeft: '10px'
        }),
        
        indicatorSeparator: (provided, state) => ({
            display: 'none'
        }),

        option: (provided, state) => ({
            ...provided,
            color: '#7f81a2',
            padding: 10,
            background: '#0d1022',
            '&:hover': {
                background: '#0d1022'
            }
          }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
      
            return { ...provided, 
                opacity, 
                transition,
                color: '#7f81a2'
            };
        }
      }

    return (
        <Select
            className={ className || "sort-select" }
            defaultValue={options.length > defaultValue && options[defaultValue]}
            isClearable={false}
            isSearchable={false}
            name="state"
            styles={customStyles}
            width={width || '200px'}
            menuColor='#7f81a2'
            options={options} 
            onChange={handleSort}/>
    )
}

export default SortSelect;