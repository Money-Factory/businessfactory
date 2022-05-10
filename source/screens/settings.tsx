import React, { useMemo } from 'react';
import { Alert, ScrollView } from 'react-native';
import { View, ActionSheet, Text } from 'react-native-ui-lib';
import { observer, useLocalObservable } from 'mobx-react';

import { useStores } from '../stores';

import Section from '../components/section';
import Action from '../components/action';

import appInfo from '../../app.json';

type PickersStateKey = keyof Omit<PickersState, 'show' | 'hide'>;
type PickersState = {
  appearance: boolean;
  language: boolean;

  show: <T extends PickersStateKey>(what: T) => void;
  hide: <T extends PickersStateKey>(what: T) => void;
};

const Settings: React.FC = observer(() => {
  const { ui } = useStores();

  const pickers: PickersState = useLocalObservable(() => ({
    appearance: false,
    language: false,

    show<T extends PickersStateKey>(what: T) {
      pickers[what] = true;
    },
    hide<T extends PickersStateKey>(what: T) {
      pickers[what] = false;
    },
  }));

  const doSomething = (action: string) => () => {
    Alert.alert(action);
  };

  const appearancePickOption = (option: UIAppearance) => () => {
    ui.setAppearanceMode(option);
  };

  const languagePickOption = (option: UILanguage) => () => {
    ui.setLanguage(option);
  };

  const appearanceActions: AppearanceAction[] = useMemo(
    () => [{ name: 'System' }, { name: 'Light' }, { name: 'Dark' }],
    []
  );
  const AppearanceActionSheet = useMemo(
    () => (
      <ActionSheet
        title="Appearance"
        cancelButtonIndex={appearanceActions.length}
        useNativeIOS
        options={[
          ...appearanceActions.map((action) => ({
            label: action.name,
            onPress: appearancePickOption(action.name),
          })),
          {
            label: 'Cancel',
          },
        ]}
        visible={pickers.appearance}
        onDismiss={() => pickers.hide('appearance')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.appearance]
  );

  const languageActions: LanguageAction[] = useMemo(
    () => [{ name: 'System' }, { name: 'English' }],
    []
  );
  const LanguageActionSheet = useMemo(
    () => (
      <ActionSheet
        title="Language"
        cancelButtonIndex={languageActions.length}
        useNativeIOS
        options={[
          ...languageActions.map((action) => ({
            label: action.name,
            onPress: languagePickOption(action.name),
          })),
          {
            label: 'Cancel',
          },
        ]}
        visible={pickers.language}
        onDismiss={() => pickers.hide('language')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.language]
  );

  const UINote = useMemo(
    () => (
      <View paddingH-s3 marginB-s4>
        <Text grey40>Changing UI options will reload the app</Text>
      </View>
    ),
    []
  );

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Section title="UI">
            <Action
              title="Appearance"
              info={ui.appearanceName}
              onPress={() => pickers.show('appearance')}
              rightIcon="chevron-forward"
            />
            {AppearanceActionSheet}

            <Action
              title="Language"
              info={ui.languageName}
              onPress={() => pickers.show('language')}
              rightIcon="chevron-forward"
            />
            {LanguageActionSheet}
          </Section>
          {UINote}

          <Section title="General">
            <View>
              <Action
                title="Share"
                icon="share-outline"
                onPress={doSomething('Share')}
              />
              <Action
                title="Rate"
                icon="star-outline"
                onPress={doSomething('Rate')}
              />
              <Action
                title="Support"
                icon="mail-unread-outline"
                onPress={doSomething('Support')}
              />
            </View>
          </Section>

          <Section title="About">
            <View>
              <Action title="App name" info={appInfo.expo.name} />
              <Action title="Version" info={appInfo.expo.version} />
            </View>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});

export default Settings;
