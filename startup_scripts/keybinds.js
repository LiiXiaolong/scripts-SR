if (typeof Client !== 'undefined' && typeof ClientEvents !== 'undefined') {
  let KeyMappingRegistry = Java.loadClass('dev.architectury.registry.client.keymappings.KeyMappingRegistry');
  ClientEvents.init(() => KeyMappingRegistry.register(global.jKeySpecial));
  ClientEvents.init(() => KeyMappingRegistry.register(global.hKeySpecial));
  ClientEvents.init(() => KeyMappingRegistry.register(global.gKeySpecial));
  ClientEvents.init(() => KeyMappingRegistry.register(global.kKeySpecial));
  ClientEvents.init(() => KeyMappingRegistry.register(global.lKeySpecial));
}
