import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface IToggleSelectButtonProps {
  onSelect?: (selected: boolean) => void;
  label: string;
}

const ToggleSelectButton: React.FC<IToggleSelectButtonProps> = ({
  onSelect,
  label,
}) => {
  const [selected, setSelected] = React.useState(false);

  const onSelectHandler = () => {
    setSelected(!selected);
  };

  React.useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.options,
          {
            backgroundColor: selected ? '#e11c20' : '#fff',
          },
          ,
        ]}
        onPress={onSelectHandler}
      >
        <Text
          style={[
            styles.text,
            {
              color: selected ? '#fff' : '#e11c20',
            },
            ,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// const ToggleSelectButton: React.FC<IToggleSelectButtonProps> = ({
//   options,
//   selected,
//   onSelect,
// }) => {
//   return (
//     <View style={styles.container}>
//       {options.map(option => (
//         <TouchableOpacity
//           key={option.id}
//           style={[
//             styles.options,
//             {
//               backgroundColor: selected.includes(option.id)
//                 ? '#e11c20'
//                 : '#fff',
//             },
//             ,
//           ]}
//           onPress={() => onSelect(option.id)}
//         >
//           <Text
//             style={[
//               styles.text,
//               {
//                 color: selected.includes(option.id) ? '#fff' : '#e11c20',
//               },
//               ,
//             ]}
//           >
//             {option.value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  options: {
    borderColor: '#e11c20',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 11,
    margin: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
  },
});

export default ToggleSelectButton;
